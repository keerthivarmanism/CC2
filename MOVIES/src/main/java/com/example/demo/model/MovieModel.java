package com.example.demo.model;

import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@RestController
@Entity
public class MovieModel {
	@Id
	private int year;
	private String Genere;
	private  Float Rating;
	private String RequestMovies;
	private String Downloads;
	private String RecentlyAdded;
	public MovieModel(int year, String genere, Float rating, String requestMovies, String downloads,
			String recentlyAdded) {
		super();
		this.year = year;
		Genere = genere;
		Rating = rating;
		RequestMovies = requestMovies;
		Downloads = downloads;
		RecentlyAdded = recentlyAdded;
	}
	public MovieModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getGenere() {
		return Genere;
	}
	public void setGenere(String genere) {
		Genere = genere;
	}
	public Float getRating() {
		return Rating;
	}
	public void setRating(Float rating) {
		Rating = rating;
	}
	public String getRequestMovies() {
		return RequestMovies;
	}
	public void setRequestMovies(String requestMovies) {
		RequestMovies = requestMovies;
	}
	public String getDownloads() {
		return Downloads;
	}
	public void setDownloads(String downloads) {
		Downloads = downloads;
	}
	public String getRecentlyAdded() {
		return RecentlyAdded;
	}
	public void setRecentlyAdded(String recentlyAdded) {
		RecentlyAdded = recentlyAdded;
	}
	
}

