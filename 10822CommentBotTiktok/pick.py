import pyautogui
import time

time.sleep(1)

currentMouseX, currentMouseY = pyautogui.position()
print(pyautogui.size())
print(currentMouseX, currentMouseY)
# to this snippet from pick.py:
# pyautogui.moveTo(currentMouseX, currentMouseY)

# pyautogui.write('Hello world!', interval=0.25)

pyautogui.tripleClick(102, 543) 
pyautogui.click(102, 543) 
pyautogui.click(102, 543) 
