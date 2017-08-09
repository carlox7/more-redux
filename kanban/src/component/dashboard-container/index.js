import './dashboard-container.scss'
import React from 'react'
import {connect} from 'react-redux'


import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'ready'})
    this.props.categoryCreate({title: 'set'})
    this.props.categoryCreate({title: 'go'})
    this.props.categoryCreate({title: 'done'})
  }

  render(){
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  }
}

// let bindToStore = connect(mapStateToProps, mapDispatchToProps)

// DashboardContainer = bindToStore(DashboardContainer)

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer)
