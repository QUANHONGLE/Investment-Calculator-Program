import { webImage } from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <h1>Investment Calculator</h1>
      <img src={webImage} alt="Web Image" />
    </div>
  );
}
