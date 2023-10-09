<template>
  <div>
    <h1
      class="CONFIGURATOR"
      style="text-align: center; padding: 0px 0px 20px 0px"
    >
      Zoom98 CONFIGURATOR
    </h1>
  </div>
  <div>
    <el-row :gutter="20">
      <el-col :span="3"></el-col>
      <el-col id="image" class="select-el-col" :span="18">
        <img id="base" :src="Img.case" style="width: 100%; height: 100%" />
        <img
          id="knob"
          v-show="showKnob"
          :src="Img.knob"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="knobModule"
          v-show="showKnob"
          :src="Img.knobModule"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="weight"
          :src="Img.weight"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="doubleKey"
          v-show="showDoubleKey"
          :src="Img.doubleKey"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="screen"
          v-show="showScreen"
          :src="Img.screen"
          style="position: absolute; top: 0px; height: 100%"
        />
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  <div v-if="flag" style="padding: 18px 0 25px 0">
    <el-row :gutter="20" class="row-bg" justify="center">
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Case Color
          </h4>
          <el-select
            v-model="case_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_case"
          >
            <el-option
              v-for="item in case_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Weight Color
          </h4>
          <el-select
            v-model="weight_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_weight"
          >
            <el-option
              v-for="item in weight_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Module
          </h4>
          <el-select
            v-model="module"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_module"
          >
            <el-option
              v-for="item in module_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4" v-if="showKnob">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Knob Color
          </h4>
          <el-select
            v-model="knob_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_knob"
          >
            <el-option
              v-for="item in knob_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
    </el-row>
  </div>
  <div v-else style="padding: 5px 0 5px 0">
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Case Color</h4>
        <el-select
          v-model="case_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_case"
        >
          <el-option
            v-for="item in case_color_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Weight Color</h4>
        <el-select
          v-model="weight_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_weight"
        >
          <el-option
            v-for="item in weight_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Module</h4>
        <el-select
          v-model="module"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_module"
        >
          <el-option
            v-for="item in module_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col" >
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Knob Color</h4>
        <el-select
          v-model="knob_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_knob"
        >
          <el-option
            v-for="item in knob_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
  </div>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <div class="select-tilte">
          <p style="font-size: 20px; padding-bottom: 10px">
            180 Default combinations
          </p>
          &nbsp;&nbsp;• 20 case and backplate combos (the same color) <br />
          &nbsp;&nbsp;• 9 knob & weight combos (the same color) <br />
          You can choose up to 180 color ways as your default keyboard kit.
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImgStore } from "@/stores/img";
const Img = useImgStore();
const flag = ref(window.screen.width < 1100 ? false : true);
let showKnob = ref(false);
let showDoubleKey = ref(false);
let showScreen = ref(true);

const case_color = ref("Case_SE_IceBlue");
const weight_color = ref("Weight_PVD_Silver");
const module = ref("Screen");
const knob_color = ref("Knob_PVD_Silver");
const knob_module_color = ref("Knob_Modeule_SE_IceBlue");
const double_key_color = ref("Key_SE_IceBlue");
window.onload = () => {
  Img.case = "./Case/Zoom98_SE_IceBlue.png";
  Img.weight = "./Weight/Zoom98_Weight_Ano_Gold.png";
  Img.knob = "./Knob/Zoom98_Knob_eWhite.png";
  Img.knobModule = "./KnobModule/Zoom98_Knob_SE_IceBlue.png"
  Img.doubleKey = "./DoubleKey/Zoom98_SE_IceBlue.png";
  Img.screen = "./Screen/Zoom98_Screen.png";
};

const update_case = () => {
  Img.case = dict[case_color.value];
  Img.weight = dict[default_dict[case_color.value]["weight"]];
  Img.knob = dict[default_dict[case_color.value]["knob"]];
  Img.knobModule = dict[default_dict[case_color.value]["knobModule"]];
  Img.doubleKey = dict[default_dict[case_color.value]["key"]];
  weight_color.value = default_dict[case_color.value]["weight"];
  knob_color.value = default_dict[case_color.value]["knob"];
  knob_module_color.value = default_dict[case_color.value]["knobModule"];
  double_key_color.value = default_dict[case_color.value]["key"];
};
const update_weight = () => {
  Img.weight = dict[weight_color.value];
};
const update_knob = () => {
  Img.knob = dict[knob_color.value];
};
const update_module = (value: string) => {
  switch(value) {
    case "Screen":
      console.log("Screen")
      showScreen.value = true;
      showKnob.value = false;
      showDoubleKey.value = false;
      break;
    case "Knob":
      console.log("Knob")
      showScreen.value = false;
      showKnob.value = true;
      showDoubleKey.value = false;
      break;
    case "Double Key":
      console.log("Double Key")
      showScreen.value = false;
      showKnob.value = false;
      showDoubleKey.value = true;
      break;
    default:
  }
};

const case_color_options = [
  {
    value: "Case_SE_eWhite",
    label: "E-White",
  },
  {
    value: "Case_SE_GTSilver",
    label: "GT Silver",
  },
  {
    value: "Case_SE_IceBlue",
    label: "Ice Blue",
  },
  {
    value: "Case_SE_Orange",
    label: "Anodized Orange",
  },
  {
    value: "Case_SE_Lavender",
    label: "Anodized Lavender",
  },
  {
    value: "Case_SE_Black",
    label: "Anodized Black",
  },
  {
    value: "Case_EE_BlushPink",
    label: "Blush Pink",
  },
  {
    value: "Case_EE_CoolGrey",
    label: "Cool Grey",
  },
  {
    value: "Case_EE_CyberYellow",
    label: "Cyber Yellow",
  },
  {
    value: "Case_EE_Lilac",
    label: "Lilac",
  },
  {
    value: "Case_EE_MilkTea",
    label: "Milk Tea",
  },
  {
    value: "Case_EE_MilkyGreen",
    label: "Milky Green",
  },
  {
    value: "Case_EE_Navy",
    label: "Navy",
  },
  {
    value: "Case_EE_Plum",
    label: "Plum",
  },
  {
    value: "Case_EE_ScarletRed",
    label: "Scarlet Red",
  },
  {
    value: "Case_EE_SkyBlue",
    label: "Sky Blue",
  },
  {
    value: "Case_EE_StrawberryIcecream",
    label: "Strawberry icecream",
  },
  {
    value: "Case_EE_White",
    label: "White",
  },
  {
    value: "Case_EE_WildGreen",
    label: "Wild Green",
  },
];

const weight_options = [
  {
    value: "Weight_Ano_Black",
    label: "Anodized Black",
  },
  {
    value: "Weight_Ano_Gold",
    label: "Anodized Gold",
  },
  {
    value: "Weight_Ano_Pink",
    label: "Anodized Pink",
  },
  {
    value: "Weight_Ano_RoseGold",
    label: "Anodized RoseGold",
  },
  {
    value: "Weight_eWhite",
    label: "E-White",
  },
  {
    value: "Weight_PVD_Black",
    label: "PVD Black",
  },
  {
    value: "Weight_PVD_Gold",
    label: "PVD Gold",
  },
  {
    value: "Weight_PVD_Prism",
    label: "PVD Prism",
  },
  {
    value: "Weight_PVD_Silver",
    label: "PVD Silver",
  },
];

const knob_options = [
  {
    value: "Knob_Ano_Black",
    label: "Ano Black",
  },
  {
    value: "Knob_Ano_Gold",
    label: "Ano Gold",
  },
  {
    value: "Knob_Ano_Pink",
    label: "Ano Pink",
  },
  {
    value: "Knob_Ano_RoseGold",
    label: "Ano RoseGold",
  },
  {
    value: "Knob_eWhite",
    label: "E_White",
  },
  {
    value: "Knob_PVD_Black",
    label: "PVD Black",
  },
  {
    value: "Knob_PVD_Gold",
    label: "PVD Gold",
  },
  {
    value: "Knob_PVD_Prism",
    label: "PVD Prism",
  },
  {
    value: "Knob_PVD_Silver",
    label: "PVD Silver",
  }
];

const module_options = [
  {
    value: "Screen",
    label: "Screen",
  },
  {
    value: "Knob",
    label: "Knob",
  },
  {
    value: "Double Key",
    label: "Double Key",
  },
]

const dict = {
  "Case_EE_Black": "./Case/Zoom98_EE_Black.png",
  "Case_EE_BlushPink": "./Case/Zoom98_EE_BlushPink.png",
  "Case_EE_CoolGrey": "./Case/Zoom98_EE_CoolGrey.png",
  "Case_EE_CyberYellow": "./Case/Zoom98_EE_CyberYellow.png",
  "Case_EE_Lilac": "./Case/Zoom98_EE_Lilac.png",
  "Case_EE_MilkTea": "./Case/Zoom98_EE_MilkTea.png",
  "Case_EE_MilkyGreen": "./Case/Zoom98_EE_MilkyGreen.png",
  "Case_EE_Navy": "./Case/Zoom98_EE_Navy.png",
  "Case_EE_Plum": "./Case/Zoom98_EE_Plum.png",
  "Case_EE_ScarletRed": "./Case/Zoom98_EE_ScarletRed.png",
  "Case_EE_SkyBlue": "./Case/Zoom98_EE_SkyBlue.png",
  "Case_EE_StrawberryIcecream": "./Case/Zoom98_EE_StrawberryIcecream.png",
  "Case_EE_White": "./Case/Zoom98_EE_White.png",
  "Case_EE_WildGreen": "./Case/Zoom98_EE_WildGreen.png",
  "Case_SE_Black": "./Case/Zoom98_SE_Black.png",
  "Case_SE_eWhite": "./Case/Zoom98_SE_eWhite.png",
  "Case_SE_GTSilver": "./Case/Zoom98_SE_GTSilver.png",
  "Case_SE_IceBlue": "./Case/Zoom98_SE_IceBlue.png",
  "Case_SE_Lavender": "./Case/Zoom98_SE_Lavender.png",
  "Case_SE_Orange": "./Case/Zoom98_SE_Orange.png",

  "Weight_Ano_Black": "./Weight/Zoom98_Weight_Ano_Black.png",
  "Weight_Ano_Gold": "./Weight/Zoom98_Weight_Ano_Gold.png",
  "Weight_Ano_Pink": "./Weight/Zoom98_Weight_Ano_Pink.png",
  "Weight_Ano_RoseGold": "./Weight/Zoom98_Weight_Ano_RoseGold.png",
  "Weight_eWhite": "./Weight/Zoom98_Weight_eWhite.png",
  "Weight_PVD_Black": "./Weight/Zoom98_Weight_PVD_Black.png",
  "Weight_PVD_Gold": "./Weight/Zoom98_Weight_PVD_Gold.png",
  "Weight_PVD_Prism": "./Weight/Zoom98_Weight_PVD_Prism.png",
  "Weight_PVD_Silver": "./Weight/Zoom98_Weight_PVD_Silver.png",

  "Screen": "./Screen/Zoom98_Screen.png",

  "Key_EE_Black": "./DoubleKey/Zoom98_EE_Black.png",
  "Key_EE_BlushPink": "./DoubleKey/Zoom98_EE_BlushPink.png",
  "Key_EE_CoolGrey": "./DoubleKey/Zoom98_EE_CoolGrey.png",
  "Key_EE_CyberYellow": "./DoubleKey/Zoom98_EE_CyberYellow.png",
  "Key_EE_Lilac":"./DoubleKey/Zoom98_EE_Lilac.png",
  "Key_EE_MilkTea":"./DoubleKey/Zoom98_EE_MilkTea.png",
  "Key_EE_MilkyGreen":"./DoubleKey/Zoom98_EE_MilkyGreen.png",
  "Key_EE_Navy":"./DoubleKey/Zoom98_EE_Navy.png",
  "Key_EE_Plum":"./DoubleKey/Zoom98_EE_Plum.png",
  "Key_EE_ScarletRed":"./DoubleKey/Zoom98_EE_ScarletRed.png",
  "Key_EE_SkyBlue":"./DoubleKey/Zoom98_EE_SkyBlue.png",
  "Key_EE_StrawberryIcecream":"./DoubleKey/Zoom98_EE_StrawberryIcecream.png",
  "Key_EE_White":"./DoubleKey/Zoom98_EE_White.png",
  "Key_EE_WildGreen":"./DoubleKey/Zoom98_EE_WildGreen.png",
  "Key_SE_Black":"./DoubleKey/Zoom98_SE_Black.png",
  "Key_SE_eWhite":"./DoubleKey/Zoom98_SE_eWhite.png",
  "Key_SE_GTSilver":"./DoubleKey/Zoom98_SE_GTSilver.png",
  "Key_SE_IceBlue":"./DoubleKey/Zoom98_SE_IceBlue.png",
  "Key_SE_Lavender":"./DoubleKey/Zoom98_SE_Lavender.png",
  "Key_SE_Orange":"./DoubleKey/Zoom98_SE_Orange.png",

  "Knob_Module_EE_Black":"./KnobModule/Zoom98_Knob_EE_Black.png",
  "Knob_Module_EE_BlushPink":"./KnobModule/Zoom98_Knob_EE_BlushPink.png",
  "Knob_Module_EE_CoolGrey":"./KnobModule/Zoom98_Knob_EE_CoolGrey.png",
  "Knob_Module_EE_CyberYellow":"./KnobModule/Zoom98_Knob_EE_CyberYellow.png",
  "Knob_Module_EE_Lilac":"./KnobModule/Zoom98_Knob_EE_Lilac.png",
  "Knob_Module_EE_MilkTea":"./KnobModule/Zoom98_Knob_EE_MilkTea.png",
  "Knob_Module_EE_MilkyGreen":"./KnobModule/Zoom98_Knob_EE_MilkyGreen.png",
  "Knob_Module_EE_Navy":"./KnobModule/Zoom98_Knob_EE_Navy.png",
  "Knob_Module_EE_Plum":"./KnobModule/Zoom98_Knob_EE_Plum.png",
  "Knob_Module_EE_ScarletRed":"./KnobModule/Zoom98_Knob_EE_ScarletRed.png",
  "Knob_Module_EE_SkyBlue":"./KnobModule/Zoom98_Knob_EE_SkyBlue.png",
  "Knob_Module_EE_StrawberryIcecream":"./KnobModule/Zoom98_Knob_EE_StrawberryIcecream.png",
  "Knob_Module_EE_White":"./KnobModule/Zoom98_Knob_EE_White.png",
  "Knob_Module_EE_WildGreen":"./KnobModule/Zoom98_Knob_EE_WildGreen.png",
  "Knob_Module_SE_Black":"./KnobModule/Zoom98_Knob_SE_Black.png",
  "Knob_Module_SE_GTSilver":"./KnobModule/Zoom98_Knob_SE_GTSilver.png",
  "Knob_Module_SE_IceBlue":"./KnobModule/Zoom98_Knob_SE_IceBlue.png",
  "Knob_Module_SE_Lavender":"./KnobModule/Zoom98_Knob_SE_Lavender.png",
  "Knob_Module_SE_Orange":"./KnobModule/Zoom98_Knob_SE_Orange.png",
  "Knob_Module_SE_White":"./KnobModule/Zoom98_Knob_SE_White.png",

  "Knob_Ano_Black":"./Knob/Zoom98_Knob_Ano_Black.png",
  "Knob_Ano_Gold":"./Knob/Zoom98_Knob_Ano_Gold.png",
  "Knob_Ano_Pink":"./Knob/Zoom98_Knob_Ano_Pink.png",
  "Knob_Ano_RoseGold":"./Knob/Zoom98_Knob_Ano_RoseGold.png",
  "Knob_eWhite":"./Knob/Zoom98_Knob_eWhite.png",
  "Knob_PVD_Black":"./Knob/Zoom98_Knob_PVD_Black.png",
  "Knob_PVD_Gold":"./Knob/Zoom98_Knob_PVD_Gold.png",
  "Knob_PVD_Prism":"./Knob/Zoom98_Knob_PVD_Prism.png",
  "Knob_PVD_Silver":"./Knob/Zoom98_Knob_PVD_Silver.png",
};

const default_dict = {
  "Case_SE_Black":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_SE_Black",
      "knobModule":"Knob_Modeule_SE_Black",
      "knob":"Knob_Ano_Gold"
  },
  "Case_SE_eWhite":
  {
      "weight": "Weight_Ano_Pink",
      "key": "Key_SE_eWhite",
      "knobModule":"Knob_Modeule_SE_White",
      "knob":"Knob_eWhite"
  },
  "Case_SE_GTSilver":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_SE_GTSilver",
      "knobModule":"Knob_Modeule_SE_GTSilver",
      "knob":"Knob_PVD_Silver"
  },
  "Case_SE_IceBlue":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_SE_IceBlue",
      "knobModule":"Knob_Modeule_SE_IceBlue",
      "knob":"Knob_PVD_Silver"
  },
  "Case_SE_Lavender":
  {
      "weight": "Weight_PVD_Prism",
      "key": "Key_SE_Lavender",
      "knobModule":"Knob_Modeule_SE_Lavender",
      "knob":"Knob_Ano_Pink"
  },
  "Case_SE_Orange":
  {
      "weight": "Weight_PVD_Gold",
      "key": "Key_SE_Orange",
      "knobModule":"Knob_Modeule_SE_Orange",
      "knob":"Knob_PVD_Gold"
  },
  "Case_EE_Black":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_EE_Black",
      "knobModule":"Knob_Modeule_EE_Black",
      "knob":"Knob_Ano_Pink"
  },
  "Case_EE_BlushPink":
  {
      "weight": "Weight_Ano_Pink",
      "key": "Key_EE_BlushPink",
      "knobModule":"Knob_Modeule_EE_BlushPink",
      "knob":"Knob_Ano_Pink"
  },
  "Case_EE_CoolGrey":
  {
      "weight": "Weight_PVD_Black",
      "key": "Key_EE_CoolGrey",
      "knobModule":"Knob_Modeule_EE_CoolGrey",
      "knob":"Knob_PVD_Black"
  },
  "Case_EE_CyberYellow":
  {
      "weight": "Weight_Ano_Black",
      "key": "Key_EE_CyberYellow",
      "knobModule":"Knob_Modeule_EE_CyberYellow",
      "knob":"Knob_Ano_Black"
  },
  "Case_EE_Lilac":
  {
      "weight": "Weight_Ano_RoseGold",
      "key": "Key_EE_Lilac",
      "knobModule":"Knob_Modeule_EE_Lilac",
      "knob":"Knob_PVD_Prism"
  },
  "Case_EE_MilkTea":
  {
      "weight": "Weight_Ano_Gold",
      "key": "Key_EE_MilkTea",
      "knobModule":"Knob_Modeule_EE_MilkTea",
      "knob":"Knob_Ano_Gold"
  },
  "Case_EE_MilkyGreen":
  {
      "weight": "Weight_Ano_Gold",
      "key": "Key_EE_MilkyGreen",
      "knobModule":"Knob_Modeule_EE_MilkyGreen",
      "knob":"Knob_eWhite"
  },
  "Case_EE_Navy":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_EE_Navy",
      "knobModule":"Knob_Modeule_EE_Navy",
      "knob":"Knob_Ano_RoseGold"
  },
  "Case_EE_Plum":
  {
      "weight": "Weight_PVD_Silver",
      "key": "Key_EE_Plum",
      "knobModule":"Knob_Modeule_EE_Plum",
      "knob":"Knob_eWhite"
  },
  "Case_EE_ScarletRed":
  {
      "weight": "Weight_eWhite",
      "key": "Key_EE_ScarletRed",
      "knobModule":"Knob_Modeule_EE_ScarletRed",
      "knob":"Knob_eWhite"
  },
  "Case_EE_SkyBlue":
  {
      "weight": "Weight_eWhite",
      "key": "Key_EE_SkyBlue",
      "knobModule":"Knob_Modeule_EE_SkyBlue",
      "knob":"Knob_eWhite"
  },
  "Case_EE_StrawberryIcecream":
  {
      "weight": "Weight_Ano_Gold",
      "key": "Key_EE_StrawberryIcecream",
      "knobModule":"Knob_Module_EE_StrawberryIcecream",
      "knob":"Knob_eWhite"
  },
  "Case_EE_White":
  {
      "weight": "Weight_PVD_Gold",
      "key": "Key_EE_White",
      "knobModule":"Knob_Modeule_EE_White",
      "knob":"Knob_Ano_Gold"
  },
  "Case_EE_WildGreen":
  {
      "weight": "Weight_Ano_Gold",
      "key": "Key_EE_WildGreen",
      "knobModule":"Knob_Modeule_EE_WildGreen",
      "knob":"Knob_Ano_Gold"
  },
};
</script>

<style scoped>
.select-el-col {
  display: flex;
}
.div_center {
  margin: 0 auto;
}

.CONFIGURATOR {
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6e6d6d;
  padding-bottom: 15px;
}

.select-tilte {
  color: #797676;
  padding-top: 10px;
  padding-bottom: 10px;
}

#image {
  margin: 0 auto;
}
</style>
