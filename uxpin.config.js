module.exports = {
    components: {
      categories: [
        {
          name: 'General',
          include: [
            'src/components/Form.js',
            'src/components/FilterButton.js',
            'src/components/merge/todo/Todo.js',
            'src/components/InputOutput.js',
            'src/components/News.js'
          ]
        }
      ],
      wrapper: 'src/wrapper/uxpinwrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'Learn UXPin Merge - React Todo list tutorial'
  };
