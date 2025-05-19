<template>
  <div class="w-full h-full flex flex-col items-center p-4">
    <h2 class="text-4xl font-bold mb-4">Data Table</h2>
    
    <!-- Filters and Controls -->
    <div class="flex gap-4 items-center py-4 w-full max-w-5xl">
      <input
        class="max-w-md px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#42b883] focus:outline-none"
        placeholder="Filter emails..."
        :value="table.getColumn('email')?.getFilterValue() as string"
        @input="table.getColumn('email')?.setFilterValue(($event.target as HTMLInputElement).value)"
      />
      
      <!-- Column Visibility Dropdown -->
      <div class="relative ml-auto">
        <button
          @click="toggleColumnMenu"
          class="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          Columns
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <div
          v-if="showColumnMenu"
          class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border"
        >
          <div class="py-1">
            <div
              v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
              :key="column.id"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              @click="column.toggleVisibility()"
            >
              <input
                type="checkbox"
                :checked="column.getIsVisible()"
                class="mr-2 rounded text-[#42b883] focus:ring-[#42b883]"
                @click.stop
                @change="column.toggleVisibility()"
              >
              <span class="capitalize">{{ column.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Table Container -->
    <div class="rounded-md border w-full max-w-5xl overflow-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              scope="col"
              :class="[
                'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
                header.column.getIsPinned() ? 'sticky bg-gray-50 z-10' : '',
                header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0'
              ]"
              @click="header.column.getToggleSortingHandler()?.($event)"
            >
              <div class="flex items-center">
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <span v-if="header.column.getCanSort()" class="ml-2">
                  <svg
                    v-if="header.column.getIsSorted() === 'asc'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                  <svg
                    v-if="header.column.getIsSorted() === 'desc'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        
        <tbody class="bg-white divide-y divide-gray-200">
          <template v-if="table.getRowModel().rows?.length">
            <tr
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              :class="row.getIsSelected() ? 'bg-gray-50' : 'hover:bg-gray-50'"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :class="[
                  'px-6 py-4 whitespace-nowrap',
                  cell.column.getIsPinned() ? 'sticky bg-white z-10' : '',
                  cell.column.getIsPinned() === 'left' ? 'left-0' : 'right-0'
                ]"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </template>
          
          <template v-else>
            <tr>
              <td :colspan="columns.length" class="px-6 py-4 text-center text-gray-500">
                No results.
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    
    <!-- Pagination and Selection Info -->
    <div class="flex items-center justify-between w-full max-w-5xl py-4">
      <div class="text-sm text-gray-600">
        {{ table.getFilteredSelectedRowModel().rows.length }} of
        {{ table.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
      
      <div class="flex gap-2">
        <button
          @click="table.previousPage()"
          :disabled="!table.getCanPreviousPage()"
          :class="[
            'px-4 py-2 border rounded-md',
            !table.getCanPreviousPage() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          ]"
        >
          Previous
        </button>
        <button
          @click="table.nextPage()"
          :disabled="!table.getCanNextPage()"
          :class="[
            'px-4 py-2 border rounded-md',
            !table.getCanNextPage() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          ]"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FlexRender } from '@tanstack/vue-table';
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, 
  getPaginationRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const columnHelper = createColumnHelper<Payment>();

const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
        class="rounded text-[#42b883] focus:ring-[#42b883]"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
        class="rounded text-[#42b883] focus:ring-[#42b883]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => <span class="capitalize">{row.getValue("status")}</span>,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: ({ row }) => <span class="lowercase">{row.getValue("email")}</span>,
  }),
  columnHelper.accessor("amount", {
    header: () => <div class="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div class="text-right font-medium">{formatted}</div>;
    },
  }),
];

const sorting = ref([]);
const columnFilters = ref([]);
const columnVisibility = ref({});
const rowSelection = ref({});
const showColumnMenu = ref(false);

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onSortingChange: updaterOrValue => {
    if (typeof updaterOrValue === 'function') {
      sorting.value = updaterOrValue(sorting.value);
    } else {
      sorting.value = updaterOrValue;
    }
  },
  onColumnFiltersChange: updaterOrValue => {
    if (typeof updaterOrValue === 'function') {
      columnFilters.value = updaterOrValue(columnFilters.value);
    } else {
      columnFilters.value = updaterOrValue;
    }
  },
  onColumnVisibilityChange: updaterOrValue => {
    if (typeof updaterOrValue === 'function') {
      columnVisibility.value = updaterOrValue(columnVisibility.value);
    } else {
      columnVisibility.value = updaterOrValue;
    }
  },
  onRowSelectionChange: updaterOrValue => {
    if (typeof updaterOrValue === 'function') {
      rowSelection.value = updaterOrValue(rowSelection.value);
    } else {
      rowSelection.value = updaterOrValue;
    }
  },
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },
});

const toggleColumnMenu = () => {
  showColumnMenu.value = !showColumnMenu.value;
};
</script>
