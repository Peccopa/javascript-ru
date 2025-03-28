/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * }} ViewParams
 */

import ElementCreator from '../util/element-creator';

export default class View {
    /**
     *
     * @param {import('../util/element-creator').ElementParams} params
     */
    constructor(params) {
        this.elementCreator = this.createView(params);
    }

    /**
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.elementCreator.getElement();
    }

    /**
     * @param {import('../util/element-creator').ElementParams} params
     * @returns {ElementCreator}
     */
    createView(params) {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback,
        };
        const elementCreator = new ElementCreator(elementParams);

        return elementCreator;
    }
}
