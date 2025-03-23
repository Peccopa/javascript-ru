import './header.css';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link/link-view';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
};

const NamePages = {
    INDEX: 'Main',
    PRODUCT: 'Cards',
};

const START_PAGE_INDEX = 0;

export default class HeaderView extends View {
    constructor() {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
            textContent: '',
            callback: null,
        };
        super(params);

        this.linkElements = [];
        this.configureView();
    }

    configureView() {
        const paramsNav = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };

        const creatorNav = new ElementCreator(paramsNav);

        this.elementCreator.addInnerElement(creatorNav);

        const pages = [
            {
                name: NamePages.INDEX,
                callback: () => {},
            },
            {
                name: NamePages.PRODUCT,
                callback: () => {},
            },
        ];

        pages.forEach((item, index) => {
            const linkElement = new LinkView(item.name, this.linkElements);
            creatorNav.addInnerElement(linkElement.getHtmlElement());

            this.linkElements.push(linkElement);
            if (index === START_PAGE_INDEX) {
                linkElement.setSelectedStatus();
            }
        });
    }
}
