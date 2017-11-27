export const CHANGE_STEP_FORM = 'CHANGE_STEP_FORM';
export const REGISTER_SUBMIT_DATA = 'REGISTER_SUBMIT_DATA';
export const REGISTER_SUBMIT_DATA_ACTION = 'REGISTER_SUBMIT_DATA_ACTION';

export const registerSubmitDataAction = (data) => ({
    type: REGISTER_SUBMIT_DATA_ACTION,
    data
});

export const changeStepForm = (stepForm) => ({
    type: CHANGE_STEP_FORM,
    stepForm
});
