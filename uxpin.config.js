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
            'src/components/MaterialButtonSimple.js',
            'src/components/Card.js',
            'src/components/CardTitle.js',
            'src/components/NestedCard.js',
            'src/components/ProjectedNestedCard.js'
          ]
        }
      ],
      wrapper: 'src/wrapper/uxpinwrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'Learn UXPin Merge - React Todo list tutorial'
  };
