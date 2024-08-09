'use strict';

// module

import { Article } from './js/Article.js';
import { Modal } from './js/Modal.js';
import { ArticleModal } from './js/ArticleModal.js';
import { data } from './js/Data.js';

// Page

window.onload = function () {
  console.log('Hello, worm!');
  addTagsClickHandler();
  if (data) {
    renderArticlesToDom();
  }
  addToolsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      const clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategiesBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTags = () => {
  const tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
};

const showAllStrategies = () => {
  const strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategiesBySelectedTag = (selectedTag) => {
  const strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach((tag) => {
      if (tag.innerHTML === selectedTag)
        strategy.classList.remove('strategy_hidden');
    });
  });
};

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach((article) => {
    strategiesWrapper.append(article.generateArticle());
  });
  addStrategyClickHandler();
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};

const addToolsClickHandler = () => {
  document
    .querySelector('.tools__button .button')
    .addEventListener('click', () => {
      generateToolsModal();
    });
};

const generateToolsModal = () => {
  renderModalWindow('test');
};

const renderModalWindow = (content) => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
};

const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.strategy')) {
      let clickedStrategyId = e.target
        .closest('.strategy')
        .getAttribute('data-id');
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
  });
};

const getClickedData = (id) => {
  return data.find((article) => article.id == id);
};

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal('article-modal', article);
  modal.renderModal();
};