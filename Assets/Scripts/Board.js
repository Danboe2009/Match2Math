#pragma strict
var height : int;
var width : int;
var tile : Tile;

private var Blue : int;
private var Green : int;
private var Red : int;
private var Yellow : int; 

private var FirstTile : Tile;
private var SecondTile : Tile;

private var Won : boolean;
private var Playing : boolean;

private var BoxObj : GameObject;
private var Back : tk2dSprite;
private var Job : GameObject;

BoxObj = GameObject.Find("Box");
Back = GameObject.Find("Background").GetComponent(tk2dSprite);
Job = GameObject.Find("GoodJob");

function Start () 
{
	if(Variables.Theme == "Doc")
	{
		Back.spriteId = Back.GetSpriteIdByName("DocBackground");
	}
	if(Variables.Theme == "Princesses")
	{
		Back.spriteId = Back.GetSpriteIdByName("PrincessesBackground");
	}
	if(Variables.Theme == "Sofia")
	{
		Back.spriteId = Back.GetSpriteIdByName("SofiaBackground");
	}
	if(Variables.Theme == "Jake")
	{
		Back.spriteId = Back.GetSpriteIdByName("JakeBackground");
	}
	if(Variables.Theme == "Mickey")
	{
		Back.spriteId = Back.GetSpriteIdByName("MickeyBackground");
	}
	if(Variables.Theme == "Thomas")
	{
		Back.spriteId = Back.GetSpriteIdByName("ThomasBackground");
	}
	StartCoroutine("Intro");
	//Tries = 7;

	for(var y = 0; y < width; y++)
	{
		for(var x = 0; x < height; x++)
		{
			var tempTile = Instantiate(tile,Vector3((x*1.8)-5.38,(y*1.8)-2.7,-1),Quaternion.Euler(0,0,0));
			tempTile.transform.parent = this.gameObject.transform;
			while(!tempTile.colored)
			{
				var tempColor = Random.Range(0,4);
				if(tempColor == 0 && Blue < 8)
				{
					if(Variables.Theme == "Doc")
					{
						tempTile.color = "Doc";
					}
					if(Variables.Theme == "Princesses")
					{
						tempTile.color = "PrincessesAriel";
					}
					if(Variables.Theme == "Sofia")
					{
						tempTile.color = "SofiaJames";
					}
					if(Variables.Theme == "Jake")
					{
						tempTile.color = "Jake";
					}
					if(Variables.Theme == "Mickey")
					{
						tempTile.color = "Mickey";
					}
					if(Variables.Theme == "Thomas")
					{
						tempTile.color = "Thomas";
					}
					tempTile.colored = true;
					Blue ++;
				}
				if(tempColor == 1 && Green < 8)
				{
					if(Variables.Theme == "Doc")
					{
						tempTile.color = "DocHippo";
					}
					if(Variables.Theme == "Princesses")
					{
						tempTile.color = "PrincessesBelle";
					}
					if(Variables.Theme == "Sofia")
					{
						tempTile.color = "SofiaAmber";
					}
					if(Variables.Theme == "Jake")
					{
						tempTile.color = "JakeIzzy";
					}
					if(Variables.Theme == "Mickey")
					{
						tempTile.color = "MickeyDonald";
					}
					if(Variables.Theme == "Thomas")
					{
						tempTile.color = "ThomasHatt";
					}
					tempTile.colored = true;
					Green++;
				}
				if(tempColor == 2 && Red < 6)
				{
					if(Variables.Theme == "Doc")
					{
						tempTile.color = "DocLamb";
					}
					if(Variables.Theme == "Princesses")
					{
						tempTile.color = "PrincessesCinderella";
					}
					if(Variables.Theme == "Sofia")
					{
						tempTile.color = "SofiaClover";
					}
					if(Variables.Theme == "Jake")
					{
						tempTile.color = "JakeCubby";
					}
					if(Variables.Theme == "Mickey")
					{
						tempTile.color = "MickeyGoofy";
					}
					if(Variables.Theme == "Thomas")
					{
						tempTile.color = "ThomasJames";
					}
					tempTile.colored = true;
					Red++;
				}
				if(tempColor == 3 && Yellow < 6)
				{
					if(Variables.Theme == "Doc")
					{
						tempTile.color = "DocStuffy";
					}
					if(Variables.Theme == "Princesses")
					{
						tempTile.color = "PrincessesRapunzel";
					}
					if(Variables.Theme == "Sofia")
					{
						tempTile.color = "Sofia";
					}
					if(Variables.Theme == "Jake")
					{
						tempTile.color = "JakeSkully";
					}
					if(Variables.Theme == "Mickey")
					{
						tempTile.color = "MickeyMinnie";
					}
					if(Variables.Theme == "Thomas")
					{
						tempTile.color = "ThomasPercy";
					}
					tempTile.colored = true;
					Yellow++;
				}
			}
		}
	} 
	//chest.color = Color(1,1,1,0);
	//button.color = Color(1,1,1,0);
	//okbut.SetActive(false);
	//chbut.SetActive(false);
	Won = false;
	Playing = true;
}

function Update () 
{
	if(GameObject.FindGameObjectsWithTag("Tile").Length == 0)
	{
		if(!Won)
		{
			StartCoroutine("Finish");
			Playing = false;
			Won = true;
		}
	}
}

function Clicked(tempTile : Tile)
{
	if(FirstTile == null)
	{
		FirstTile = tempTile;
		FirstTile.flipped = true;
	}
	else
	{
		SecondTile = tempTile;
		SecondTile.flipped = true;
	}
	
	if(SecondTile != null)
	{
		Variables.waiting = true;
		yield WaitForSeconds(1);
		if(FirstTile.color == SecondTile.color)
		{	
			FadeOut(0.5,FirstTile.gameObject.GetComponent(tk2dSprite));
			FadeOut(0.5,SecondTile.gameObject.GetComponent(tk2dSprite));
			Destroy(FirstTile.gameObject,1);
			Destroy(SecondTile.gameObject,1);
			FirstTile = null;
			SecondTile = null;
		}
		else
		{
			//Tries--;
			FirstTile.flipped = false;
			SecondTile.flipped = false;
			FirstTile = null;
			SecondTile = null;
		}
		Variables.waiting = false;
	}
}

function Intro()
{
//	Variables.waiting = true;
//	BoxObj.transform.position = Vector3(0,0,-7);
//	yield WaitForSeconds(3);
//	FadeOut(2,box);
//	Variables.waiting = false;
//	yield WaitForSeconds(1.9);
//	Destroy(BoxObj,0);
}

function FadeOut (time : float, object : tk2dSprite) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    object.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    yield;
	}
}

function Finish()
{
	Job.GetComponent.<Animation>().Play("StarLeft");
	yield WaitForSeconds(3);
	Application.LoadLevel("Main");
}
