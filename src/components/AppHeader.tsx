
import reactLogo        from "../assets/react.svg"
import azad             from "../assets/az_ad.png"
import { PrimaryButton } from '@fluentui/react/lib/Button';

export function AppHeader() {
  return (
    <header> 

      <a target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a target="_blank">
        <img src={azad} className="logo" alt="AZ AD Logo" />
      </a>

    </header>
  );
}
