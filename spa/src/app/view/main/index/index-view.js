import View from '../../view';
import './index.css';

const CssClasses = {
    INDEX: 'index',
};

const FIELD_TEXT_ONE = 'Input field one';
const FIELD_TEXT_TWO = 'Input field two';

export default class IndexView extends View {
    constructor() {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.INDEX],
            textContent: '',
            callback: null,
        };
        super(params);

        this.firstField = '';
        this.secondField = '';
        this.configureView();
    }

    configureView() {
        let paramsInput = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_ONE,
            callback: () => this.keyupHandler(event, 'firstInput'),
        };
    }

    /**
     *
     * @param {KeyboardEvent} event
     * @param {string} fieldName
     */
    keyupHandler(event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this[fieldName] = event.target.value;
        }
    }
}
