import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Ng5SliderModule } from 'ng5-slider';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/customer/login/login.component';
import { SignupComponent } from './auth/customer/signup/signup.component';
import { PictureFilterPipe } from 'src/app/products/product-list/filter.pipe';

import { HeadersInterceptor } from 'src/app/JWT-token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// third-party libraries
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseOptionsToken } from 'angularfire2'
import { environment } from '../environments/environment';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductCommentComponent } from './products/product-detail/product-comment/product-comment.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { ProductReplyComponent } from './products/product-detail/product-comment/product-reply/product-reply.component';
import { FilterComponent } from './products/product-list/filter/filter.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistInfoComponent } from './artists/artist-list/artist-info/artist-info.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './profile/profile.component';
import { BasicProfileComponent } from './profile/basic-profile/basic-profile.component';
import { ArtistProfileComponent } from './profile/artist-profile/artist-profile.component';
import { CustomerComponent } from './auth/customer/customer.component';
import { VendorComponent } from './auth/vendor/vendor.component';
import { SignUpComponent } from './auth/vendor/sign-up/sign-up.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ConsoleComponent } from './console/console.component';
import { InformationComponent } from './console/information/information.component';
import { ArtworksComponent } from './console/artworks/artworks.component';
import { ArtistCollectorLoginComponent } from './console/artist-collector-login/artist-collector-login.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditArtworkComponent } from './console/artworks/edit-artwork/edit-artwork.component';
import { AdminComponent } from './admin/admin.component';
import { PictureManagerComponent } from './admin/picture-manager/picture-manager.component';
import { AccountManagerComponent } from './admin/account-manager/account-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersComponent } from './console/orders/orders.component';
import { PreloadComponent } from './preload/preload.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductCommentComponent,
    ProductReplyComponent,
    FilterComponent,
    PictureFilterPipe,
    ArtistsComponent,
    ArtistDetailComponent,
    ArtistListComponent,
    ArtistInfoComponent,
    ProfileComponent,
    BasicProfileComponent,
    ArtistProfileComponent,
    CustomerComponent,
    VendorComponent,
    SignUpComponent,
    ConsoleComponent,
    InformationComponent,
    ArtworksComponent,
    ArtistCollectorLoginComponent,
    LayoutComponent,
    EditArtworkComponent,
    AdminComponent,
    PictureManagerComponent,
    AccountManagerComponent,
    DashboardComponent,
    OrdersComponent,
    PreloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatRippleModule,
    NgbPaginationModule,
    MDBBootstrapModule.forRoot(),
    MatChipsModule,
    AngularFireStorageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    Ng5SliderModule,
    MatPaginatorModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: FirebaseOptionsToken, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent],
})
export class AppModule { }
