//? REACT BOOTSTRAP
import ProgressBar from "react-bootstrap/ProgressBar";

export function BasicExample() {
  return <ProgressBar now={60} />;
}

export function WithLabelExample() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export function ScreenreaderLabelExample() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

export function ContextualExample() {
  return (
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export function StripedExample() {
  return (
    <div>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>
  );
}

export function AnimatedExample() {
  return <ProgressBar animated now={45} />;
}

export function StackedExample() {
  return (
    <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
  );
}