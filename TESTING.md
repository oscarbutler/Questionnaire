# Testing

## Manual Testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Go to the quiz link| Click on the "Go To The Quiz!" link | The user is redirected to the question page | Yes | Yes | - |
| Home button | Click on the "Home Button" link | The user is redirected to the home page | Yes | Yes | - |
| Clicking an answer | Click on the answers given | The answer should either add 1 to correct or incorrect | Yes | Yes | - |
| Next Question button | Click on the next question button | The user should see a random question with appropriate answers | Yes | Yes | - |
| Answer buttons | Click on one of the answer buttons | The user should see an error message if the answer is incorrect. It should also add an extra score to either incorrect or correct answer. | Yes | Yes | - |
| Incorrect alert | The alert if answer is incorrect | The user should recieve a alert saying "This is incorrect, try again!." | Yes | Yes | - |
| Question Number | The question number when going to next question | The question number should go up by one and dissapear at the end | Yes | Yes | - |
| Credits link | Click on credits link | It should open another tab that shows a Github account | Yes | Yes | - |

## Lighthouse

### Introduction Page

![Introduction Page](documentation/lightshouse-intro.png)

### Main Page

![Main Page](documentation/lighthouse-main.png)