#pragma strict
static var Theme : String;
static var waiting : boolean;
static var Box : GameObject;
static var Mess : TextMesh;

function Start () 
{
	DontDestroyOnLoad(this);
	Setup();
}

function Update()
{

}

static function Setup()
{
	
}

static function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	Box = Instantiate(Resources.Load("MessageBox"),Vector3(0,0,-7),Quaternion.Euler(0,0,0));
	Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(0,0,-8),Quaternion.Euler(0,0,0));
	Mess.text = MesTex;
}