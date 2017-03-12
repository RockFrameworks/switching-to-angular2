@Component({
	selector: 'app',
	providers: [NamesList],
	templateUrl: './app.html',
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/', component: Home, name:'home'},
	{ path: '/', component: About, name: 'about'}
])
export class App{}

function Component( config ){
	//validate properties
	return (componentCtrl) => {
		//apply decorator
	}
}