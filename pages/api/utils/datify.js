export default function datify(val) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let d = new Date(val)
    let formatted = d.toLocaleString('US', options)

    return formatted
    
}