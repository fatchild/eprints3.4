######################################################################
#
# EPrints::Search::Condition::NameMatch
#
######################################################################
#
#
######################################################################

=pod

=head1 NAME

B<EPrints::Search::Condition::NameMatch> - "NameMatch" search condition

=head1 DESCRIPTION

Matches items with a matching name.

=cut

package EPrints::Search::Condition::NameMatch;

use EPrints::Search::Condition::Comparison;

@ISA = qw( EPrints::Search::Condition::Comparison );

use strict;

sub new
{
	my( $class, @params ) = @_;

	return $class->SUPER::new( "=", @params );
}

sub extra_describe_bits
{
	my( $self ) = @_;

	return '"'.$self->{params}->[0]->{family}.'"', 
		'"'.$self->{params}->[0]->{given}.'"';
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

