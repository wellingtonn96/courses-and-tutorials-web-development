import React from 'react'

export function childrenWithProps(props){
    return React.Children.map(props.children, child =>{
        return React.cloneElement(props.children, {
            ...props, ...props.children.props
        })
    }) 
}
