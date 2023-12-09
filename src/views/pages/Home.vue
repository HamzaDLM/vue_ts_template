<script lang="ts">
import { defineComponent } from 'vue'
import employeeService from '../../services/employee.service'
import { IEmployee } from '../../types/employee.type'

export default defineComponent({
  data() {
    return {
      data: [] as IEmployee[],
      tableHeaders: [
        "Employee Id",
        "Last name",
        "First name"
      ],
    }
  },
  created() {
    employeeService.getAll()
      .then((response) => {
        this.data = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
})
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-zinc-200">
    <button class="absolute top-0 right-0 p-1 m-5 border rounded-lg w-7 hover:opacity-80 border-zinc-600 text-zinc-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17Zm-7-4H1v-2h4v2Zm18 0h-4v-2h4v2ZM11 5V1h2v4h-2Zm0 18v-4h2v4h-2ZM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5l-1.3 1.4Zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425L18.7 20.15ZM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4l-1.4-1.3ZM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525L3.85 18.7ZM12 12Z">
        </path>
      </svg>
    </button>
    <div class="">
      <div class="container mx-auto text-center lg:text-left xl:px-32">
        <div class="grid items-center lg:grid-cols-2">
          <div class="mb-12 lg:mb-0">
            <div
              class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h3 class="mb-6 text-5xl font-bold">
                Go - Typescript
              </h3>

              <p class="mb-4 font-bold">
                Technologies used in this stack:
              </p>
              <p class="mb-6 text-gray-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>

              <div class="mb-6">
                <p class="mb-4 font-bold">
                  Retrieving data using axios
                </p>


                <div class="relative overflow-x-auto rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead class="text-xs text-gray-100 uppercase bg-[#6A99AB] dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th v-for="key of tableHeaders" scope="col" class="px-6 py-3">
                          {{ key }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item of data" class="bg-[#6A99AB]/10 border-b border-[#CAD1B3]/50 dark:border-gray-700">
                        <th v-for="key of Object.keys(item)" scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ item[key] }}
                        </th>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/ci/ALr3YSGG2bN0JGcJAy1G3VxW6iPBPqwOLNrzvBxpxWWuEvmiwqKj_WAT76fihPIcQ4vf8s5AnYWTKDo"
              class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Almond Blossom by Van Gogh" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
