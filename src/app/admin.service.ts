import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API = "http://localhost:8080/adminservice"; // Adjusted endpoint for admin operations

  constructor(private http: HttpClient) {}

  public registerAdmin(adminData: any) {
    return this.http.post(`${this.API}`, adminData);
  }

  public getAdmins() {
    return this.http.get(`${this.API}`);
  }

  public deleteAdmin(adminId: any) {
    return this.http.delete(`${this.API}/${adminId}`);
  }

  public updateAdmin(admin: any) {
    return this.http.put(`${this.API}/${admin.id}`, admin);
  }
}
