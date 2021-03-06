<template>
  <div>
    <SquareFrame frame-type="M">
      <div class="circle_image_top">
        <CircleImage view-box="0 0 201 201" />
        <div class="lock_image">
          <LockImage />
        </div>
      </div>
      <div class="elements_root">
        <div class="element_block">
          <Label font-style="h2" text-color="w">MEMBERS LOGIN</Label>
        </div>
        <br />
        <div class="element_block">
          <InputForm placeholder-bg-color="k">
            <Label font-style="h4" text-color="a">LOGIN ID</Label>
          </InputForm>
        </div>
        <br />
        <div class="element_block">
          <InputForm placeholder-bg-color="k">
            <Label font-style="h4" text-color="a">PASSWORD</Label>
          </InputForm>
        </div>
        <br />
        <div class="element_block">
          <SquareButton button-size="smallBtn" button-color="g">
            <Label font-style="h4" text-color="w">LOGIN</Label>
          </SquareButton>
        </div>
      </div>
      <div class="circle_image_bottm_left">
        <SmallCircleImage view-box="0 0 81 81" />
        <div class="account_add">
          <AccountAddIcon view-box="0 0 63 43" />
        </div>
      </div>
      <div class="circle_image_bottm_right">
        <SmallCircleImage view-box="0 0 81 81" />
        <div class="foget_password">
          <FogetPasswordIcon view-box="0 0 63 47" />
        </div>
      </div>
    </SquareFrame>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CircleImage from '@/static/layout_circle.svg'
import LockImage from '@/static/lock.svg'
import SmallCircleImage from '@/static/layout_circle-s.svg'
import AccountAddIcon from '@/static/icon-account_add.svg'
import FogetPasswordIcon from '@/static/icon-foget_password.svg'
import SquareButton from '~/components/atoms/SquareButton/index.vue'
import Label from '~/components/atoms/Label/index.vue'
import SquareFrame from '~/components/atoms/SquareFrame/index.vue'
import InputForm from '~/components/atoms/InputForm/index.vue'

export default defineComponent({
  components: {
    SquareButton,
    Label,
    SquareFrame,
    InputForm,
    CircleImage,
    SmallCircleImage,
    LockImage,
    AccountAddIcon,
    FogetPasswordIcon,
  },
})
</script>

<style lang="scss">
.square_frame {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(20%);
  & .circle_image_top {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-70%);
    & > svg {
      width: 181px;
      height: 181px;
    }
    & .lock_image {
      position: absolute;
      display: inline-block;
      top: 0;
      left: 50%;
      margin: 0;
      transform: translateX(-50%) translateY(60%);
      z-index: 1;
    }
  }
  & .circle_image_bottm_left {
    position: absolute;
    display: inline-block;
    top: 98%;
    left: 50%;
    & .account_add {
      position: absolute;
      display: inline-block;
      top: 26%;
      left: 16%;
    }
  }
  & .circle_image_bottm_right {
    position: absolute;
    display: inline-block;
    top: 98%;
    left: 75%;
    & .foget_password {
      position: absolute;
      display: inline-block;
      top: 26%;
      left: 17%;
    }
  }
}
.elements_root {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-45%);
  & .element_block {
    text-align: center;
  }
}
</style>
