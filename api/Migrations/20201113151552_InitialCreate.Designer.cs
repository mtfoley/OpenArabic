﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Models;

namespace api.Migrations
{
    [DbContext(typeof(ApiContext))]
    [Migration("20201113151552_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("api.Models.Sentence", b =>
                {
                    b.Property<long>("SentenceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Arabic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("English")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("TextId")
                        .HasColumnType("bigint");

                    b.HasKey("SentenceId");

                    b.HasIndex("TextId");

                    b.ToTable("Sentences");
                });

            modelBuilder.Entity("api.Models.Text", b =>
                {
                    b.Property<long>("TextId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("ArabicText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Author")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Editor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EnglishText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TextId");

                    b.ToTable("Texts");
                });

            modelBuilder.Entity("api.Models.Word", b =>
                {
                    b.Property<long>("WordId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Arabic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("English")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("SentenceId")
                        .HasColumnType("bigint");

                    b.HasKey("WordId");

                    b.HasIndex("SentenceId");

                    b.ToTable("Words");
                });

            modelBuilder.Entity("api.Models.Sentence", b =>
                {
                    b.HasOne("api.Models.Text", "Text")
                        .WithMany("Sentences")
                        .HasForeignKey("TextId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Text");
                });

            modelBuilder.Entity("api.Models.Word", b =>
                {
                    b.HasOne("api.Models.Sentence", "Sentence")
                        .WithMany("Words")
                        .HasForeignKey("SentenceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sentence");
                });

            modelBuilder.Entity("api.Models.Sentence", b =>
                {
                    b.Navigation("Words");
                });

            modelBuilder.Entity("api.Models.Text", b =>
                {
                    b.Navigation("Sentences");
                });
#pragma warning restore 612, 618
        }
    }
}
