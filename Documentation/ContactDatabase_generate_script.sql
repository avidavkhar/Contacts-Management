USE [master]
GO
/****** Object:  Database [ContactDatabase]    Script Date: 28-02-2021 12:04:29 ******/
CREATE DATABASE [ContactDatabase]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ContactDatabase', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ContactDatabase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ContactDatabase_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ContactDatabase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ContactDatabase] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContactDatabase].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContactDatabase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ContactDatabase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ContactDatabase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ContactDatabase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ContactDatabase] SET ARITHABORT OFF 
GO
ALTER DATABASE [ContactDatabase] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ContactDatabase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ContactDatabase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ContactDatabase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ContactDatabase] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ContactDatabase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ContactDatabase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ContactDatabase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ContactDatabase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ContactDatabase] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ContactDatabase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ContactDatabase] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ContactDatabase] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ContactDatabase] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ContactDatabase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ContactDatabase] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ContactDatabase] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ContactDatabase] SET RECOVERY FULL 
GO
ALTER DATABASE [ContactDatabase] SET  MULTI_USER 
GO
ALTER DATABASE [ContactDatabase] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ContactDatabase] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ContactDatabase] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ContactDatabase] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ContactDatabase] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ContactDatabase] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ContactDatabase', N'ON'
GO
ALTER DATABASE [ContactDatabase] SET QUERY_STORE = OFF
GO
USE [ContactDatabase]
GO
/****** Object:  Table [dbo].[Contact]    Script Date: 28-02-2021 12:04:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[firstname] [varchar](100) NULL,
	[lastname] [varchar](100) NULL,
	[emailaddress] [varchar](200) NULL,
	[contactid] [int] IDENTITY(1,1) NOT NULL,
	[dob] [date] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[contactid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Mark', N'Waugh', N'mark.waugh@test.com', 1, CAST(N'1986-01-01' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Justin', N'Langer', N'justin.langer@test.com', 2, CAST(N'1966-01-03' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Ricky', N'Ponting', N'ricky.ponting@test.com', 3, CAST(N'1988-02-04' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Damian', N'Martin', N'damian.martin@test.com', 4, CAST(N'1974-07-04' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'test', N'test', N'test@test.com', 5, CAST(N'2011-01-28' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Avinash', N'Davkhar', N'avidavkhar@test.com', 6, CAST(N'1984-10-23' AS Date))
INSERT [dbo].[Contact] ([firstname], [lastname], [emailaddress], [contactid], [dob]) VALUES (N'Captin', N'America', N'captin.america@test.com', 7, CAST(N'2003-01-09' AS Date))
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
USE [master]
GO
ALTER DATABASE [ContactDatabase] SET  READ_WRITE 
GO
