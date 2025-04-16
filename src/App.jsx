import './App.css'
import ControlledFeild from './components/ControlledFeild/ControlledFeild'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UncontrolledField from './components/UncontrolledField/UncontrolledField'

function App() {

  return (
    <>
      <div>
        <h3>Simple Form</h3>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledFeild></ControlledFeild> */}
        {/* <UncontrolledField></UncontrolledField> */}
        <HookForm></HookForm>
      </div>
    </>
  )
}

export default App
