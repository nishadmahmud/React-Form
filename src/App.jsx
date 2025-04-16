import './App.css'
import ControlledFeild from './components/ControlledFeild/ControlledFeild'
import FamilyTree from './components/FamilyTree/FamilyTree'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductManage from './components/ProductManage/ProductManage'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UncontrolledField from './components/UncontrolledField/UncontrolledField'

function App() {

  return (
    <>
      <div>
        <h1>Explore React Form</h1>
        {/* <h3>Simple Form</h3> */}
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledFeild></ControlledFeild> */}
        {/* <UncontrolledField></UncontrolledField> */}
        {/* <HookForm></HookForm> */}
        {/* <ProductManage></ProductManage> */}
        <FamilyTree></FamilyTree>
      </div>
    </>
  )
}

export default App
