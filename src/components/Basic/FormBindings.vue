<template>
    <div class="content">
        <div class="input">
            <h2>Text Input</h2>
            <input v-model="text">
            <p>{{ text }}</p>
        </div>
        <div class="checkbox">
            <h2>Checkbox</h2>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">Checked: {{ checked }}</label>
            
        </div>
        <div class="checkboxes">
            <h2>Multi Checkbox</h2>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <p>Checked names: {{ checkedNames }}</p>
        </div>
        <div class="radio">
            <h2>Radio</h2>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <p>Picked: {{ picked }}</p>
        </div>
        <div class="select">
            <h2>Select</h2>
            <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
            <p>Selected: {{ selected }}</p>
        </div>

        <div class="multy-select">
            <h2>Multi Select</h2>
            <select v-model="multiSelected" multiple style="width:100px">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
            <p>Selected: {{ multiSelected }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const text = ref('Input something')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('one')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<style lang="less" scoped>

.content{
    height: 20rem;
    width: 61rem;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    overflow: auto;
    h2{
        font-size: 24px;
    }
    input{
        text-decoration-line: underline;
    }
}
</style>