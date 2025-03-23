import './footer.css';
import View from '../view';

const CssClasses = {
    FOOTER: 'footer',
};

const TEXT = 'SPA example app';

export default class FooterView extends View {
    constructor() {
        const params = {
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: TEXT,
            callback: null,
        };
        super(params);
    }
}
