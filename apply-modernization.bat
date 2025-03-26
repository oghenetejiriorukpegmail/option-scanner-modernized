@echo off
echo Option Scanner Modernization Script
echo ===================================
echo.
echo This script will apply the modernization changes to the Option Scanner application.
echo Please make sure you have backed up your files before proceeding.
echo.
pause

echo.
echo Applying package.json updates...
move /y package.json.new package.json
move /y client\package.json.new client\package.json
move /y server\package.json.new server\package.json

echo.
echo Applying theme and styled components updates...
move /y client\src\styles\theme.ts.new client\src\styles\theme.ts
move /y client\src\styles\StyledComponents.tsx.new client\src\styles\StyledComponents.tsx

echo.
echo Applying server service updates...
move /y server\src\services\marketService.js.new server\src\services\marketService.js

echo.
echo Applying App.tsx updates...
move /y client\src\App.tsx.new client\src\App.tsx

echo.
echo Modernization changes applied successfully!
echo.
echo Next steps:
echo 1. Run 'npm run install:all' to update dependencies
echo 2. Run 'npm start' to start the application
echo 3. Test the application on various devices and screen sizes
echo.
echo For more information, please refer to the modernization-summary.md file.
echo.
pause