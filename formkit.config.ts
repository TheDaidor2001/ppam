import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'text-gray-500 font-semibold',
        message: 'text-red-500 font-semibold mb-5',
        wrapper: 'space-y-2 mb-3',
        input: 'border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-cyan-500 w-full',
      },
      checkbox: {
        outer: 'space-y-10',
        options: 'grid grid-cols-2 lg:grid-cols-4',
        fieldset: 'w-full',
        legend: 'text-gray-500 font-semibold my-5',
        wrapper: '$reset flex items-center gap-2 space-y-2',
        input: '$reset checked:bg-cyan-500 focus:outline-none '
      },
      textarea: {
        outer: 'mt-5',
        help: 'text-gray-500'
      },
      submit: {
        input: '$reset bg-cyan-500 w-full py-2 rounded-lg text-white font-semibold text-lg hover:bg-cyan-600 transition-colors mt-10'
      }
    })
  }
}


export default config;