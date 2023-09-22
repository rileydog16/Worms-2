const runtimeUrl = `${window.location.origin}/runtime/runtime.js`
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Image} = Elemento.components

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Text1'), fontSize: 32}, 'Underground creatures and things'),
        React.createElement(Image, {path: pathWith('Image1'), source: 'Plant.jpg'}),
    )
}

// appMain.js
export default function NewApp(props) {
    const pathWith = name => 'NewApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'NewApp', },)
}
