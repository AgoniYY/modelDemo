<template>
    <div>
        <el-table class="common-table"
            :size="size"
            :header-cell-style="headerCellStyle"
            v-loading="loading"
            v-bind="$attrs"
            v-on="$listeners">
            <slot></slot>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'CommonTable',
    props: {
        size: {
            type: String,
            default: 'mini'
        },
        headerCellStyle: {
            type: Function,
            default: ({ row, rowIndex }) => {
                return { backgroundColor: '#eee' }
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.common-table {
    width: 99.9%;
    margin-bottom: 10px;
}
</style>
