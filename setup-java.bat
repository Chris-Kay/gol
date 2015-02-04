@echo off

set DESTINATION_PATH=C:\Users\%USERNAME%\Desktop
set CURRENT_DIR=%~dp0

IF NOT EXIST %DESTINATION_PATH%\candidate-java-2 (


  set FULL_DESTINATION_PATH=%DESTINATION_PATH%\candidate-java-2\GameOfLife\


)

IF NOT EXIST %DESTINATION_PATH%\candidate-java-1 (

  set FULL_DESTINATION_PATH=%DESTINATION_PATH%\candidate-java-1\GameOfLife\


)



IF DEFINED FULL_DESTINATION_PATH (

  echo %DESTINATION_PATH%
  echo.
  echo Creating JAVA clone in %FULL_DESTINATION_PATH%
  echo %CURRENT_DIR%
  timeout /t 5

  robocopy %CURRENT_DIR%\java %FULL_DESTINATION_PATH% /MIR
) ELSE (
  echo 'Both JAVA Candidate folders are created. You cannot create any more ! :-('
  timeout /t 2
)