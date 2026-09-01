import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './lib/resizeAutoZoomEvent';
import './ZoomSelectBox.scss';
import { I18nDataRenderer } from './I18nContext';
declare type Props = {
    autoZoom?: boolean;
    scale: number;
    setScale: (scale: number) => void;
};
declare class ZoomSelectBox extends PureComponent<Props, {}> {
    static propTypes: {
        scale: PropTypes.Validator<number>;
        setScale: PropTypes.Validator<(...args: any[]) => any>;
    };
    createSelectOptions: ({ originalSize, zoom }: I18nDataRenderer) => ({
        id: string;
        text: string;
        value?: undefined;
    } | {
        id: string;
        text: string;
        value: number;
    } | {
        id: string;
        text?: undefined;
        value?: undefined;
    })[];
    showCalculatedScale: (i18nData: I18nDataRenderer) => number;
    render(): JSX.Element;
}
export default ZoomSelectBox;
