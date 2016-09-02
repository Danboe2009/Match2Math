#pragma strict

var Theme : String;

function Start () 
{
	
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{
	       	Variables.Theme = Theme;
			StartCoroutine("LoadLevel");
   		}
	}
}

function LoadLevel()
{
	//Variables.ClearScreen("Loading...");
	Application.LoadLevel("Board");
}
