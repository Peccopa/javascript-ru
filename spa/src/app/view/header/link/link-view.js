import View from '../../view';
import './link.css';

const CssClasses = {
    ITEM: 'nav-item',
    ITEM_SELECTED: 'nav-item__selected',
};

export default class LinkView extends View {
    /**
     * @param {string} text
     * @param {Array<LinkView>} linkElements
     */
    constructor(text, linkElements) {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        const params = {
            tag: 'a',
            classNames: [CssClasses.ITEM],
            textContent: text,
            callback: null,
        };
        super(params);

        this.linkElements = linkElements;

        this.configureView();
    }

    setSelectedStatus() {
        this.linkElements.forEach((linkElement) => linkElement.setNotSelectedStatus());
        const element = this.elementCreator.getElement();
        element.classList.add(CssClasses.ITEM_SELECTED);
    }

    setNotSelectedStatus() {
        const element = this.elementCreator.getElement();
        element.classList.remove(CssClasses.ITEM_SELECTED);
    }

    configureView() {
        const element = this.elementCreator.getElement();
        element.addEventListener('click', this.setSelectedStatus.bind(this));
    }
}
