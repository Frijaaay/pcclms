<script setup>
import Button from '@/components/Button.vue';
import { ref, watch } from 'vue';

const emit = defineEmits(['filter']);

const isFiltered = ref(false);

const selectedFilters = ref({
    condition: [],
    penalty: []
});

watch(selectedFilters, (e) => {
    emit('filter', e);
}, { deep: true });

const resetFilters = () => {
    selectedFilters.value.condition = [];
    selectedFilters.value.penalty = [];
};

const closeFilters = () => {
    isFiltered.value = false;
    selectedFilters.value.condition = [];
    selectedFilters.value.penalty = [];
};
</script>

<template>
<div class="">
    <Button v-if="!isFiltered" @click="isFiltered = true">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"><path fill="currentColor" d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458v6.927Z"/></svg>
        Filter
    </Button>
    <form v-if="isFiltered" class="w-fit flex flex-row">
        <input v-model="selectedFilters.condition" value="Good" class="btn btn-sm mr-1" type="checkbox" name="condition" aria-label="Good"/>
        <input v-model="selectedFilters.condition" value="Slightly Damaged" class="btn btn-sm mr-1" type="checkbox" name="condition" aria-label="Slightly Damaged"/>
        <input v-model="selectedFilters.condition" value="Severely Damaged" class="btn btn-sm mr-1" type="checkbox" name="condition" aria-label="Severely Damaged"/>
        <input v-model="selectedFilters.condition" value="Lost" class="btn btn-sm mr-1" type="checkbox" name="condition" aria-label="Lost"/>
        <input v-model="selectedFilters.penalty" value="No Penalty" class="btn btn-sm mr-1" type="checkbox" name="penalty" aria-label="No Penalty"/>
        <input v-model="selectedFilters.penalty" value="Paid" class="btn btn-sm mr-1" type="checkbox" name="penalty" aria-label="Paid"/>
        <input v-model="selectedFilters.penalty" value="Unpaid" class="btn btn-sm mr-1" type="checkbox" name="penalty" aria-label="Unpaid"/>
        <button @click="resetFilters" class="btn btn-sm mr-1 btn-square" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19.75 6.75h-12a4 4 0 0 0-4 4v2m16-1v2a4 4 0 0 1-4 4h-12"/><path d="m16.75 9.75l3-3l-3-3m-10 11l-3 3l3 3"/></g></svg>
        </button>
        <Button @click="closeFilters" class="btn btn-sm mr-1 btn-square" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-6 -6 24 24"><path fill="#000000" d="m7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485L2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"/></svg>
        </Button>
    </form>
</div>
</template>