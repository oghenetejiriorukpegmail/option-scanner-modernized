import React, { useState, useEffect, useCallback } from 'react';
import { MarketProvider } from './context/MarketContext';
import MarketDataDemo from './components/MarketDataDemo';
import MarketAnalysis from './components/analysis/MarketAnalysis';
import {
  Container,
  Title,
  Text,
  Card,
  Section,
  Flex,
  Button,
  Alert,
  Badge,
  Loading,
  Grid
} from './styles/StyledComponents';
import theme from './styles/theme';

/**
 * Main Application Component
 */
const App: React.FC = () => {
  const [status, setStatus] = useState<string>('Loading...');
  const [serverStatus, setServerStatus] = useState<string>('Checking server...');
  const [serverError, setServerError] = useState<string | null>(null);
  const [showMarketDemo, setShowMarketDemo] = useState<boolean>(false);
  const [showMarketAnalysis, setShowMarketAnalysis] = useState<boolean>(false);
  const [isTestingApi, setIsTestingApi] = useState<boolean>(false);
  const [apiTestResult, setApiTestResult] = useState<{
    success: boolean;
    message: string;
    provider?: string;
    timestamp?: string;
  } | null>(null);

  // Check server status
  const checkServer = useCallback(async () => {
    try {
      setServerStatus('Checking server connection...');
      setServerError(null);
      
      const response = await fetch('http://localhost:3002/api/setup');
      
      if (response.ok) {
        setServerStatus('Server running on port 3002');
        setServerError(null);
      } else {
        setServerStatus('Server is running but returned an error');
        setServerError(`Status: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      setServerStatus('Cannot connect to server');
      setServerError('Make sure the server is running on port 3002');
      console.error('Server connection error:', error);
    }
  }, []);

  // Test API connection
  const testApiConnection = useCallback(async () => {
    setIsTestingApi(true);
    setApiTestResult(null);
    
    try {
      // Test with a simple API call to get quote data
      const response = await fetch('http://localhost:3002/api/market/quote?symbol=AAPL');
      
      if (response.ok) {
        const data = await response.json();
        setApiTestResult({
          success: true,
          message: 'Successfully connected to market data API',
          provider: data.source,
          timestamp: new Date().toISOString()
        });
      } else {
        const errorData = await response.json();
        setApiTestResult({
          success: false,
          message: `API Error: ${errorData.message || 'Unknown error'}`,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      setApiTestResult({
        success: false,
        message: `Connection Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsTestingApi(false);
    }
  }, []);

  useEffect(() => {
    // Set client status
    setStatus('Client running on port 3000');
    
    // Check server status on mount
    checkServer();
  }, [checkServer]);

  return (
    <MarketProvider>
      <Container>
        <header style={{
          borderBottom: `1px solid ${theme.colors.border}`,
          paddingBottom: theme.spacing.md,
          marginBottom: theme.spacing.lg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <Title>Option Scanner</Title>
          <Text>Welcome to the Options Trading Analysis Tool</Text>
          <Badge type="info" style={{ marginTop: theme.spacing.sm }}>v0.2.0</Badge>
        </header>

        <Section>
          <Card>
            <h2 style={{ marginTop: 0 }}>System Status</h2>
            
            <Grid columns={{ mobile: '1fr', tablet: '1fr 1fr' }} gap={theme.spacing.md}>
              <div>
                <p><strong>Client:</strong> {status}</p>
                <p><strong>Server:</strong> {serverStatus}</p>
                
                {serverError && (
                  <Alert type="error">
                    {serverError}
                  </Alert>
                )}
                
                <Button 
                  variant="primary"
                  onClick={checkServer}
                  style={{ marginTop: theme.spacing.md }}
                >
                  Refresh Server Status
                </Button>
              </div>
              
              <div>
                <h3>API Connection Test</h3>
                {isTestingApi ? (
                  <Loading text="Testing API connection..." />
                ) : apiTestResult ? (
                  <div>
                    <Alert type={apiTestResult.success ? "success" : "error"}>
                      {apiTestResult.message}
                    </Alert>
                    {apiTestResult.provider && (
                      <Text style={{ fontSize: theme.typography.fontSize.sm }}>
                        Provider: {apiTestResult.provider}
                      </Text>
                    )}
                    {apiTestResult.timestamp && (
                      <Text style={{ fontSize: theme.typography.fontSize.sm }}>
                        Timestamp: {new Date(apiTestResult.timestamp).toLocaleString()}
                      </Text>
                    )}
                  </div>
                ) : (
                  <Text>Click the button below to test the market data API connection</Text>
                )}
                
                <Button 
                  variant={apiTestResult?.success ? "success" : "primary"}
                  onClick={testApiConnection}
                  disabled={isTestingApi}
                  style={{ marginTop: theme.spacing.md }}
                >
                  {isTestingApi ? 'Testing...' : 'Test API Connection'}
                </Button>
              </div>
            </Grid>
          </Card>
        </Section>

        <Section>
          <Card>
            <h2>Features</h2>
            <Grid columns={{ mobile: '1fr', tablet: '1fr 1fr' }} gap={theme.spacing.lg}>
              <div>
                <ul>
                  <li>Real-time options data analysis</li>
                  <li>Historical price tracking</li>
                  <li>Volatility calculations</li>
                  <li>Options strategy builder</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Market trend identification</li>
                  <li>Momentum assessment</li>
                  <li>Price chart visualization with technical indicators</li>
                  <li>Responsive design for mobile and desktop</li>
                </ul>
              </div>
            </Grid>
            
            <Flex 
              gap={theme.spacing.md} 
              style={{ marginTop: theme.spacing.lg }}
              direction={{ mobile: 'column', tablet: 'row' }}
            >
              <Button
                variant="primary"
                onClick={() => {
                  setShowMarketDemo(!showMarketDemo);
                  if (!showMarketDemo) setShowMarketAnalysis(false);
                }}
                style={{ width: '100%' }}
              >
                {showMarketDemo ? 'Hide Market Data Demo' : 'Show Market Data Demo'}
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowMarketAnalysis(!showMarketAnalysis);
                  if (!showMarketAnalysis) setShowMarketDemo(false);
                }}
                style={{ width: '100%' }}
              >
                {showMarketAnalysis ? 'Hide Market Analysis' : 'Show Market Analysis'}
              </Button>
            </Flex>
          </Card>
        </Section>

        {showMarketDemo && (
          <Section>
            <MarketDataDemo />
          </Section>
        )}
        
        {showMarketAnalysis && (
          <Section>
            <MarketAnalysis defaultSymbol="AAPL" />
          </Section>
        )}
        
        <footer style={{
          borderTop: `1px solid ${theme.colors.border}`,
          paddingTop: theme.spacing.md,
          marginTop: theme.spacing.xl,
          textAlign: 'center'
        }}>
          <Text style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.textSecondary }}>
            © {new Date().getFullYear()} Option Scanner. All rights reserved.
          </Text>
        </footer>
      </Container>
    </MarketProvider>
  );
};

export default App;