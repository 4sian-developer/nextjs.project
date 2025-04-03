//? REACT BOOTSTRAP
import CloseButton from "react-bootstrap/CloseButton";

export function BasicExample() {
  return <CloseButton />;
}

export function DisabledExample() {
  return <CloseButton disabled />;
}

export function VariantsExample() {
  return (
    <div data-bs-theme="dark" className='bg-dark p-2'>
      <CloseButton />
      <CloseButton disabled />
    </div>
  );
}

export function LabelledExample() {
  return <CloseButton aria-label="Hide" />;
}