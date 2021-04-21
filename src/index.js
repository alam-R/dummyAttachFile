import dummyAttachFile from './main';

const initialize = () => {
    Cypress.Commands.add('dummyAttachFile', { prevSubject: true }, dummyAttachFile);
};
  
initialize();