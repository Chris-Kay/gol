@echo off

set DESTINATION_PATH=C:\Users\%USERNAME%\Desktop
set CURRENT_DIR=%~dp0

IF NOT EXIST %DESTINATION_PATH%\candidate-js-2 (


  set FULL_DESTINATION_PATH=%DESTINATION_PATH%\candidate-js-2\GameOfLife\


)

IF NOT EXIST %DESTINATION_PATH%\candidate-js-1 (

  set FULL_DESTINATION_PATH=%DESTINATION_PATH%\candidate-js-1\GameOfLife\


)



IF DEFINED FULL_DESTINATION_PATH (

  echo %DESTINATION_PATH%
  echo.
  echo Creating JS clone in %FULL_DESTINATION_PATH%
  echo %CURRENT_DIR%
  timeout /t 5

  robocopy %CURRENT_DIR%\javascript-jasmine %FULL_DESTINATION_PATH% /MIR
) ELSE (
  echo 'Both JS Candidate folders are created. You cannot create any more ! :-('
  timeout /t 2
)