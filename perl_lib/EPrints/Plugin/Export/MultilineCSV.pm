=head1 NAME

EPrints::Plugin::Export::MultilineCSV

=cut

package EPrints::Plugin::Export::MultilineCSV;

use EPrints::Plugin::Export;
use EPrints::Plugin::Export::Grid;

@ISA = ( "EPrints::Plugin::Export::Grid" );

use strict;

sub new
{
	my( $class, %opts ) = @_;

	my $self = $class->SUPER::new( %opts );

	$self->{name} = "Multiline CSV (Staff)";
	$self->{visible} = "staff";
	$self->{advertise} = 1;
	$self->{suffix} = ".csv";
	$self->{mimetype} = "text/csv; charset=utf-8";
	
	return $self;
}

sub initialise_fh
{
	my ($self, $fh) = @_;

	binmode( $fh, ":utf8" );
}

sub output_list
{
	my( $self, %opts ) = @_;

	my $fields = $opts{fields} ||= [$self->fields($opts{list}->{dataset})];

	my @r;
	my $f = $opts{fh} ? sub { print {$opts{fh}} $_[0] } : sub { push @r, $_[0] };

	&$f(csv( $self->header_row( %opts ) ));

	# list of things

	$opts{list}->map( sub {
		( undef, undef, my $item ) = @_;

		&$f($self->output_dataobj( $item, %opts ));
	} );

	return join '', @r;
}

sub output_dataobj
{
	my( $self, $dataobj, %opts ) = @_;

	my $rows = $self->dataobj_to_rows( $dataobj, %opts );

	my @r;
	for( my $row_n=0;$row_n<scalar @{$rows};++$row_n  )
	{
		my $row = $rows->[$row_n];
		push @r, csv( @{$row} );
	}

	return join '', @r;
}

sub csv
{
	my( @row ) = @_;

	my @r = ();
	foreach my $item ( @row )
	{
		if( !defined $item )
		{
			push @r, '';
		}
		else
		{
			$item =~ s/"/""/g;
			$item =~ s/\r//g;
			push @r, "\"$item\"";
		}
	}

	return join( ",", @r )."\r\n";
}

1;

=head1 COPYRIGHT

=for COPYRIGHT BEGIN

Copyright 2017 University of Southampton.
EPrints 3.4 is supplied by EPrints Services.

This software may be used with permission and must not be redistributed.
http://www.eprints.org/eprints-3.4/

=for COPYRIGHT END

=for LICENSE BEGIN

This file is part of EPrints 3.4 L<http://www.eprints.org/>.

EPrints 3.4 and this file are released under the terms of the
GNU Lesser General Public License version 3 as published by
the Free Software Foundation unless otherwise stated.

EPrints 3.4 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with EPrints 3.4.
If not, see L<http://www.gnu.org/licenses/>.

=for LICENSE END

