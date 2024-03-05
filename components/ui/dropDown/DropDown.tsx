import s from './DropDown.module.scss';
import {ITicker} from "@/assets/services/ticket.service";

type DropDownTypes = {
    tickers: ITicker[];
    showDropDown: boolean,
    toggleDropDown: () => void;
    tickerSelection: (shortName: string) => void;
}
const DropDown = ({tickers, showDropDown, toggleDropDown, tickerSelection}: DropDownTypes) => {

    const onClickHandler = (shortName: string): void => {
        tickerSelection(shortName);
        toggleDropDown();
    };
    return (
        <div className={showDropDown ? s.dropDown : s.hiddenDropDown}>
            {
                showDropDown && tickers.map((ticker) => (<p key={ticker.shortName}
                                                            onClick={() => onClickHandler(ticker.shortName)}>
                    {`${ticker.name} (${ticker.shortName})`}</p>))
            }
        </div>
    );
};

export default DropDown;
