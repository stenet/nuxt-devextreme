import { DxPopover } from "devextreme-vue/popover";
import { DxValidationGroup } from "devextreme-vue/validation-group";
import { DxDateBox, DxButton as DxDateBoxButton } from "devextreme-vue/date-box";
import { DxNumberBox, DxButton as DxNumberBoxButton } from "devextreme-vue/number-box";
import { DxValidationSummary } from "devextreme-vue/validation-summary";
import { DxTextArea } from "devextreme-vue/text-area";
import { DxPopup } from "devextreme-vue/popup";
import { DxButton } from "devextreme-vue/button";
import { DxTextBox, DxButton as DxTextBoxButton } from "devextreme-vue/text-box";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxValidator, DxCustomRule } from "devextreme-vue/validator";
import { DxScrollView } from "devextreme-vue/scroll-view";
import { DxList } from "devextreme-vue/list";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component("DxButton", DxButton)
    .component("DxTextBoxButton", DxTextBoxButton)
    .component("DxNumberBoxButton", DxNumberBoxButton)
    .component("DxDateBoxButton", DxDateBoxButton)
    .component("DxCheckBox", DxCheckBox)
    .component("DxNumberBox", DxNumberBox)
    .component("DxDateBox", DxDateBox)
    .component("DxTextBox", DxTextBox)
    .component("DxTextArea", DxTextArea)
    .component("DxValidator", DxValidator)
    .component("DxCustomRule", DxCustomRule)
    .component("DxList", DxList)
    .component("DxPopup", DxPopup)
    .component("DxPopover", DxPopover)
    .component("DxValidationGroup", DxValidationGroup)
    .component("DxValidationSummary", DxValidationSummary)
    .component("DxScrollView", DxScrollView);
});