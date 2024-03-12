function checktxt(){
    let txt = `Our health and fitness is related to the many health benefits such as.
    Decreases risk of Type-2 diabetes
    Decreases risk of hypertension and high cholesterol level
    Improves mental health
    Relieves stress
    Improves better quality sleep
    Decreases risk of early death
    Promotes weight loss
    Increases bone density`
    let user = prompt('Enter a value to search0');
    if(txt.toUpperCase().includes(user.toUpperCase())){
        alert('Your txt has found')
    }
    else(
        alert('No txt found that you wanted')
    )
    }
    
