@echo OFF
SET BROWSER=chrome.exe
SET WAIT_TIME=2
START %BROWSER% -new tab "http://192.168.1.111/Gitswebsites/"
@ping 127.0.0.1 -n %WAIT_TIME% -w 1000 > nul
pause 