# data layer

- an array with available numbers
- an array with the used numbers
- an array with the guessed letters
- a counter of numbers dialed

## changes in data layer

- the array of used letters receives new letters as they are used
- the array of guessed letters changes when it includes the used letter
- the counter adds 1 when a used letter is not in guessed letters

# components

## App

### Show Data

- Shows a component keyboard with buttons within it
- Shows a text component on top of keyboard
- Shows a screen component with characters

## Calling text

## Show Data

- A "Calling..." text

## Calling Buttons

### Show Data

- Shows a green button Component with Call text on it
- Shows a red button Component with Hang text on it

### Get Actions

- On click call the received action

## Keyboard

### Show Data

- Show buttons with numbers from 0 to 9 and "delete", 11 in total

### Get Actions

- On click call the received action

## Screen

### Show Data

- Show the dialed numbers, 9 in total
