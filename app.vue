<template>
  <VContainer>
    <Icon style="font-size:2em" name="mdi:alarm-off" />
    <br>
    <p>
      Icons
      <Icon name="mdi:store-24-hour" />
      <Icon name="mdi:alarm-off" />
      from <code>nuxt-icon</code>
    </p>

    <Icon name="mdi:calendar" />
    <VIcon icon="radioOn" />
    <VIcon icon="radioOff" />
    <VBtn color="success" prepend-icon="email">
      email
    </VBtn>
    <VBtn color="success" prepend-icon="calendar">
      calendar
    </VBtn>
    <VBtn color="success" prepend-icon="close">
      close
    </VBtn>

    <v-select
      label="Select"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
    />

    <VCheckbox label="Checkbox" />

    <VRadioGroup>
      <VRadio label="Radio One" value="one" />
      <VRadio label="Radio Two" value="two" />
      <VRadio label="Radio Three" value="three" />
    </VRadioGroup>
  </VContainer>
</template>
