import FeedbackContext from './utility/context/FeedbackContext';
import Feedback from './components/Feedback';
import Router from './configs/Router';


function App() {
  return (
    <FeedbackContext>
      <Router/>
      <Feedback/>
    </FeedbackContext>
  )
}

export default App;
