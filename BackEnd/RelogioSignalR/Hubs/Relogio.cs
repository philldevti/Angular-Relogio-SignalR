using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

public class Relogio : Hub{
    public async Task GetHora(){
        Clients.All.InvokeAsync("setHoraAtualNaTela", DateTime.Now.ToString("HH:mm:ss"));
    } 
}